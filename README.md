# torontostockevaluator
The Toronto Stock Evaluator provides real-time data analysis concerning the Toronto Stock Exchange.

## Acknowledgements
We are proud to use the [Alpha Vantage](https://www.alphavantage.co/) stock market API.
Our website is hosted by Github Pages.

## Features
### Searching tickers
The Evaluator has a search feature that allows the user to find the open, high, low, close, and volume metrics for any company's stocks, as well as the current price of the stock. To find a company's data, follow the steps below:
1. Enter the stock ticker of the company into the search bar (ex: AAPL for Apple) **Note: This feature is case sensitive. You must            enter the ticker in ALL CAPS.**
2. Be patient. Currently, our system does not use a cache or cookies so the data may take a while to load.
3. The name of the corresponding company will appear, along with all six basic metrics. These are calculated on a per-minute basis.

### Searching ticker list
The Evaluator has a scroll bar feature that shows all the stocks we support. In addition to stocks traded on the Toronto Stock Exchange, we also support stocks on NASDAQ and the NYSE.

### Additional Metrics
Along with our five basic metrics, we also have a feature that uses the **50-day simple moving average** and **200-day simple moving average** to evaluate a stock as well as the **Relative Strength Index** for advising whether a stock should be invested in or not. These metrics play a key role in higher level financial decisions, which is why we have included them.

## Restrictions
Because the stock market opens at 9:00 a.m. local time and closes at 4:00 p.m. local time on weekdays, the following restrictions have been set:
- Before 9:00 a.m., the Toronto Stock Evaluator will display the data obtained at 4:00 p.m. the previous day.
- After 4:00 p.m., the Evaluator displays the data obtained at 3:59 p.m. on that day
- On a weekend, the Evaluator displays the data obtained at 4:00 p.m. on the most recent Friday.
