#readme

make vue template ast.

    import vueAstRun from 'vue-ast'
    let obj = vueAstRun(strings)
example.

    import vueAstRun from 'vue-ast'
    let strings = '<template>
    <div id="app">
        <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
    </template>'
    let obj = vueAstRun(strings)
    console.log(JSON.stringify(obj, null, 2))
    /*
    "open": true,
    "close": false,
    "name": "template",
    "others": [],
    "unique": 0,
    "depth": 0,
    "children": [
        {
        "open": true,
        "close": false,
        "name": "div",
        "others": [
            {
            "left": "id",
            "right": "app",
            "directive": false,
            "type": "variable",
            "variableType": "String"
            },
            {
            "left": "id",
            "right": "app",
            "directive": false,
            "type": "variable",
            "variableType": "String"
            }
        ],
        "parentId": 0,
        "unique": 1,
        "depth": 1,
        "children": [
            {
            "open": true,
            "close": false,
            "name": "div",
            "others": [
                {
                "left": "id",
                "right": "nav",
                "directive": false,
                "type": "variable",
                "variableType": "String"
                },
                {
                "left": "id",
                "right": "nav",
                "directive": false,
                "type": "variable",
                "variableType": "String"
                }
            ],
            "parentId": 1,
            "unique": 2,
            "depth": 2,
            "children": [
                {
                "open": true,
                "close": false,
                "name": "router-link",
                "routerPush": true,
                "others": [
                    {
                    "left": "to",
                    "right": "/",
                    "directive": false,
                    "type": "variable",
                    "variableType": "String"
                    },
                    {
                    "left": "to",
                    "right": "/",
                    "directive": false,
                    "type": "variable",
                    "variableType": "String"
                    }
                ],
                "parentId": 2,
                "unique": 3,
                "depth": 3,
                "children": [
                    {
                    "value": "Home",
                    "reserves": [
                        {
                        "start": 0,
                        "text": "Home",
                        "textRawValue": "Home",
                        "type": "direct",
                        "variableType": "string"
                        }
                    ],
                    "parentId": 3,
                    "unique": 4,
                    "depth": 4,
                    "name": "reserveText"
                    }
                ]
                },
                {
                "value": " |\n      ",
                "reserves": [
                    {
                    "start": 0,
                    "text": " |\n      ",
                    "textRawValue": " |\n      ",
                    "type": "direct",
                    "variableType": "string"
                    }
                ],
                "parentId": 2,
                "unique": 6,
                "depth": 3,
                "name": "reserveText"
                },
                {
                "open": true,
                "close": false,
                "name": "router-link",
                "routerPush": true,
                "others": [
                    {
                    "left": "to",
                    "right": "/about",
                    "directive": false,
                    "type": "variable",
                    "variableType": "String"
                    },
                    {
                    "left": "to",
                    "right": "/about",
                    "directive": false,
                    "type": "variable",
                    "variableType": "String"
                    }
                ],
                "parentId": 2,
                "unique": 7,
                "depth": 3,
                "children": [
                    {
                    "value": "About",
                    "reserves": [
                        {
                        "start": 0,
                        "text": "About",
                        "textRawValue": "About",
                        "type": "direct",
                        "variableType": "string"
                        }
                    ],
                    "parentId": 7,
                    "unique": 8,
                    "depth": 4,
                    "name": "reserveText"
                    }
                ]
                }
            ]
            },
            {
            "open": false,
            "close": false,
            "name": "router-view",
            "others": [],
            "parentId": 1,
            "unique": 11,
            "depth": 2
            }
        ]
        }
    ]
    */
    console.log(typeof obj) //object

#beta version

These features are not backward compatible and are subject to change without advice.

It has the start and end of the dom line as information

ex:
    {
    children: [{…}],
    close: false,
    depth: 2,
    ...
    startLine: {start: 2, end: 5},
    endLine: {start: 7, end: 7}
    }



If you have any bugs or requests, please contact ushttps://github.com/imamiya-masaki/vue-ast-js