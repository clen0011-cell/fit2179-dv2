const embedOpts = { actions: false, renderer: 'svg' };

async function embedAll() {
  const charts = [
    ['#linechart',      'vega/linechart.json'],
    ['#barchart',       'vega/barchart.json'],
    ['#treemap',        'vega/treemap.json'],
    ['#choropleth',     'vega/choropleth.json'],
    ['#heatmap',        'vega/heatmap.json'],
    ['#slopechart',     'vega/slopechart.json'],
    ['#smallmultiples', 'vega/smallmultiples.json'],
    ['#areachart',      'vega/areachart.json'],
    ['#dumbbell',       'vega/dumbbell.json'],
    ['#scatterplot',    'vega/scatterplot.json'],
    ['#symbolmap',      'vega/symbolmap.json'],
    ['#bumpchart',      'vega/bumpchart.json']
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
