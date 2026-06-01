const embedOpts = { actions: false, renderer: 'svg' };

async function embedAll() {
  const charts = [
    ['#linechart',   'vega/linechart.json'],
    ['#barchart',    'vega/barchart.json'],
    ['#treemap',     'vega/treemap.json'],
    ['#choropleth',  'vega/choropleth.json'],
    ['#heatmap',     'vega/heatmap.json'],
    ['#dumbbell',    'vega/dumbbell.json'],
    ['#areachart',   'vega/areachart.json'],
    ['#scatterplot', 'vega/scatterplot.json'],
    ['#bumpchart',   'vega/bumpchart.json'],
    ['#symbolmap',   'vega/symbolmap.json'],
    ['#radialchart', 'vega/radialchart.json']
  ];

  for (const [id, url] of charts) {
    try {
      await vegaEmbed(id, url, embedOpts);
    } catch(e) {
      console.error('Failed to load ' + url + ':', e);
    }
  }
}

embedAll();
