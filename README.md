# Nodejs-Assignment
Access json file dynamically

## Installation
1. npm install
2. node app.js or ./bin/www

## POST api's detail
    url:localhost:8000/get-meta-data/
    request:post
    header:{content-type application/json}
    body:{
      "module_name":"tradelicense",
      "screen_name":"apply"
    }
    response : {
    "applytradeName": {
        "type": "Textfield",
        "props": {
            "label": "trade name",
            "required": true
        }
    },
    "applyTradeType": {
        "type": "Select",
        "props": {
            "label": "trade type",
            "option": [
                {
                    "name": "goods",
                    "code": "goods"
                }
            ]
          }
        }
      }
      
      

## GET api's detail:
    url :localhost:8000/get-meta-data/module_name/screen_name
    response:{
    "applytradeName": {
        "type": "Textfield",
        "props": {
            "label": "trade name",
            "required": true
        }
    },
    "applyTradeType": {
        "type": "Select",
        "props": {
            "label": "trade type",
            "option": [
                {
                    "name": "goods",
                    "code": "goods"
                }
            ]
          }
        }
      }
