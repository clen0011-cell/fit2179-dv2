// Wrap every embed in its own try-catch so one crash doesn't kill the rest
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
    ['#dotplot',        'vega/dotplot.json']
  ];

  for (const [id, url] of charts) {
    try {
      await vegaEmbed(id, url, embedOpts);
    } catch(e) {
      console.error('Failed to load ' + url + ':', e);
    }
  }

  // Small multiples separately with fixed width
  try {
    await vegaEmbed('#smallmultiples', 'vega/smallmultiples.json', {
      actions: false,
      renderer: 'svg'
    });
  } catch(e) {
    console.error('Failed smallmultiples:', e);
  }
}

embedAll();
