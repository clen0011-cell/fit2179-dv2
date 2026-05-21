const embedOpts = { actions: false, renderer: 'svg' };

async function embedAll() {
  const charts = [
    ['#linechart',      'vega/linechart.json'],
    ['#barchart',       'vega/barchart.json'],
    ['#treemap',        'vega/treemap.json'],
    ['#choropleth',     'vega/choropleth.json'],
    ['#heatmap',        'vega/heatmap.json'],
    ['#areachart',      'vega/areachart.json'],
    ['#dumbbell',       'vega/dumbbell.json'],
    ['#stackedbar',     'vega/stackedbar.json'],
    ['#symbolmap',      'vega/symbolmap.json'],
    ['#dotplot',        'vega/dotplot.json'],
    ['#smallmultiples', 'vega/smallmultiples.json']
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
