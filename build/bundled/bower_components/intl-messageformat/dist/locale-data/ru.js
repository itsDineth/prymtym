IntlMessageFormat.__addLocaleData({locale:"ru",pluralRuleFunction:function(a,e){var l=String(a).split("."),t=l[0],r=!l[1],o=t.slice(-1),c=t.slice(-2);return e?"other":r&&1==o&&11!=c?"one":r&&o>=2&&o<=4&&(c<12||c>14)?"few":r&&0==o||r&&o>=5&&o<=9||r&&c>=11&&c<=14?"many":"other"}}),IntlMessageFormat.__addLocaleData({locale:"ru-BY",parentLocale:"ru"}),IntlMessageFormat.__addLocaleData({locale:"ru-KG",parentLocale:"ru"}),IntlMessageFormat.__addLocaleData({locale:"ru-KZ",parentLocale:"ru"}),IntlMessageFormat.__addLocaleData({locale:"ru-MD",parentLocale:"ru"}),IntlMessageFormat.__addLocaleData({locale:"ru-UA",parentLocale:"ru"});