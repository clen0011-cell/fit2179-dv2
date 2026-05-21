const embedOpts = { actions: false, renderer: 'svg' };

vegaEmbed('#linechart',      'vega/linechart.json',      embedOpts);
vegaEmbed('#choropleth',     'vega/choropleth.json',     embedOpts);
vegaEmbed('#barchart',       'vega/barchart.json',       embedOpts);
vegaEmbed('#treemap',        'vega/treemap.json',        embedOpts);
vegaEmbed('#heatmap',        'vega/heatmap.json',        embedOpts);
vegaEmbed('#smallmultiples', 'vega/smallmultiples.json', {actions: false, renderer: 'svg', width: 850});
vegaEmbed('#areachart',      'vega/areachart.json',      embedOpts);
vegaEmbed('#dumbbell',       'vega/dumbbell.json',       embedOpts);
vegaEmbed('#stackedbar',     'vega/stackedbar.json',     embedOpts);
vegaEmbed('#symbolmap',      'vega/symbolmap.json',      embedOpts);
vegaEmbed('#dotplot',        'vega/dotplot.json',        embedOpts);
