import docsearch from '@docsearch/js';

docsearch({
  container: '#docsearch',
  appId: 'MTOE0G431G',
  indexName: 'actocracy',
  apiKey: '8714d3644782d07c4c520529af01e331',
  insights: true,
});

const onClick = function() {
  document.getElementsByClassName('DocSearch-Button')[0].click();  
}

document.getElementById('searchToggleMobile').onclick = onClick;
document.getElementById('searchToggleDesktop').onclick = onClick;
