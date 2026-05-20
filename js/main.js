// JS helpers go here
vegaEmbed('#linechart', 'vega/linechart.json', {
  actions: false,
  renderer: 'svg'
});
vegaEmbed('#choropleth', 'vega/choropleth.json', {actions: false});
