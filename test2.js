var text = {
 "query": {
  "count": 1,
  "created": "2015-06-14T02:48:52Z",
  "lang": "en-US",
  "results": {
   "channel": {
    "title": "Yahoo! Weather - Raleigh, NC",
    "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Raleigh__NC/*http://weather.yahoo.com/forecast/USNC0558_f.html",
    "description": "Yahoo! Weather for Raleigh, NC",
    "language": "en-us",
    "lastBuildDate": "Sat, 13 Jun 2015 9:50 pm EDT",
    "ttl": "60",
    "location": {
     "city": "Raleigh",
     "country": "United States",
     "region": "NC"
    },
    "units": {
     "distance": "mi",
     "pressure": "in",
     "speed": "mph",
     "temperature": "F"
    },
    "wind": {
     "chill": "83",
     "direction": "0",
     "speed": "0"
    },
    "atmosphere": {
     "humidity": "65",
     "pressure": "30.05",
     "rising": "1",
     "visibility": "10"
    },
    "astronomy": {
     "sunrise": "5:57 am",
     "sunset": "8:32 pm"
    },
    "image": {
     "title": "Yahoo! Weather",
     "width": "142",
     "height": "18",
     "link": "http://weather.yahoo.com",
     "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
    },
    "item": {
     "title": "Conditions for Raleigh, NC at 9:50 pm EDT",
     "lat": "35.79",
     "long": "-78.64",
     "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Raleigh__NC/*http://weather.yahoo.com/forecast/USNC0558_f.html",
     "pubDate": "Sat, 13 Jun 2015 9:50 pm EDT",
     "condition": {
      "code": "29",
      "date": "Sat, 13 Jun 2015 9:50 pm EDT",
      "temp": "83",
      "text": "Partly Cloudy"
     },
     "description": "\n<img src=\"http://l.yimg.com/a/i/us/we/52/29.gif\"/><br />\n<b>Current Conditions:</b><br />\nPartly Cloudy, 83 F<BR />\n<BR /><b>Forecast:</b><BR />\nSat - Partly Cloudy. High: 97 Low: 74<br />\nSun - Mostly Sunny. High: 94 Low: 74<br />\nMon - Sunny. High: 98 Low: 76<br />\nTue - Mostly Sunny. High: 100 Low: 76<br />\nWed - Mostly Sunny. High: 98 Low: 76<br />\n<br />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Raleigh__NC/*http://weather.yahoo.com/forecast/USNC0558_f.html\">Full Forecast at Yahoo! Weather</a><BR/><BR/>\n(provided by <a href=\"http://www.weather.com\" >The Weather Channel</a>)<br/>\n",
     "forecast": [
      {
       "code": "29",
       "date": "13 Jun 2015",
       "day": "Sat",
       "high": "97",
       "low": "74",
       "text": "Partly Cloudy"
      },
      {
       "code": "34",
       "date": "14 Jun 2015",
       "day": "Sun",
       "high": "94",
       "low": "74",
       "text": "Mostly Sunny"
      },
      {
       "code": "32",
       "date": "15 Jun 2015",
       "day": "Mon",
       "high": "98",
       "low": "76",
       "text": "Sunny"
      },
      {
       "code": "34",
       "date": "16 Jun 2015",
       "day": "Tue",
       "high": "100",
       "low": "76",
       "text": "Mostly Sunny"
      },
      {
       "code": "34",
       "date": "17 Jun 2015",
       "day": "Wed",
       "high": "98",
       "low": "76",
       "text": "Mostly Sunny"
      }
     ],
     "guid": {
      "isPermaLink": "false",
      "content": "USNC0558_2015_06_17_7_00_EDT"
     }
    }
   }
  }
 }
}


console.log(text['query']['results']['channel']['item']['description']);