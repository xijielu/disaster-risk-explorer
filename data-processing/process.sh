#!/bin/zsh

# necessary permissions for all scripts
chmod -R u+x scripts

## create `/countries` folder with geojson for each country as helper
curl https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_countries_lakes.geojson -o countries/countries.geojson --create-dirs
## manually add admin-1
scripts/js/create-helpers.js
rm countries/countries.geojson


### "normalize" the raw data: rename to two digit codes, convert to geojson, polygonize where necessary, some clipping
scripts/zsh/normalize.sh

### clipping: main grid + grids/exposure for each country
echo 'Converting and clipping grid (nearly 6 million records)'
ogr2ogr -f GeoJSON -t_srs crs:84 ../CDRP\ Platform\ Development\ Seed/Base\ layer\ Grid/grid.geojson ../CDRP\ Platform\ Development\ Seed/Base\ layer\ Grid/grid.shp
scripts/js/clip-grid.js
scripts/zsh/clip_all.sh

## aggregate all data to the grids
scripts/zsh/agg.sh

## aggregate to the country and admin1 level
scripts/zsh/agg_country.sh

## merge stuff (countries, multipolygons, the grid), calculate relative values at the "right moment", add data from other shapefiles as necessary
geojson-merge countries/[A-Z][A-Z]_agg.geojson > countries.geojson
geojson-merge countries/[A-Z][A-Z]-[A-Z0-9]_agg.geojson countries/[A-Z][A-Z]-[A-Z0-9][A-Z0-9]_agg.geojson countries/[A-Z][A-Z]-[A-Z0-9][A-Z0-9][A-Z0-9]_agg.geojson > admin1.geojson
scripts/js/merge-polygons.js countries.geojson
scripts/js/merge-polygons.js admin1.geojson

ogr2ogr -f GeoJSON -t_srs crs:84 ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/CA_Earthquake_PML_AAL_Admin0.geojson ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/CA_Earthquake_PML_AAL_Admin0.shp
ogr2ogr -f GeoJSON -t_srs crs:84 ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/CA_Earthquake_PML_AAL_Admin1.geojson ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/CA_Earthquake_PML_AAL_Admin1.shp
ogr2ogr -f GeoJSON -t_srs crs:84 ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/Caribbean_Earthquake_PML_AAL_Admin0.geojson ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/Caribbean_Earthquake_PML_AAL_Admin0.shp
ogr2ogr -f GeoJSON -t_srs crs:84 ../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic/CA_Asset_AAL_admin0.geojson ../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic/CA_Asset_AAL_admin0.shp
scripts/js/add-data.js countries_joined.geojson ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/CA_Earthquake_PML_AAL_Admin0.geojson LS_EQ_
scripts/js/add-data.js countries_joined.geojson ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/Caribbean_Earthquake_PML_AAL_Admin0.geojson LS_EQ_
scripts/js/add-data.js countries_joined.geojson ../CDRP\ Platform\ Development\ Seed/Loss/Flood/probabilistic/CA_Asset_AAL_admin0.geojson LS_FL_
scripts/js/add-data.js admin1_joined.geojson ../CDRP\ Platform\ Development\ Seed/Loss/Earthquake/probabilistic/CA_Earthquake_PML_AAL_Admin1.geojson LS_EQ_

scripts/zsh/relative.sh
scripts/js/merge.js
