# gatsby-plugin-ms-bing

Gatsby plugin for adding Microsoft Bing tracking code

## Install

`npm install --save gatsby-plugin-ms-bing`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-ms-bing`,
    options: {
      bingId: "__ID__HERE__",
      enableAutoSpaTracking: true
    },
  },
];
```

## Changelog

| Version | Changes                       |
|---------|-------------------------------|
| 0.0.3   | Add enableAutoSpaTracking     |
| 0.0.2   | Initial release               |