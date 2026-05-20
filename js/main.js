// JS helpers go here
vegaEmbed('#linechart', 'vega/linechart.json', {
  actions: false,
  renderer: 'svg'
});
vegaEmbed('#choropleth', 'vega/choropleth.json', {actions: false});
vegaEmbed('#barchart', 'vega/barchart.json', {actions: false});
vegaEmbed('#heatmap', 'vega/heatmap.json', {actions: false});
vegaEmbed('#areachart', 'vega/areachart.json', {actions: false});
