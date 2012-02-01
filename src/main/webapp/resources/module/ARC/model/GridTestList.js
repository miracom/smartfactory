Ext.define('ARC.model.GridTestList', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'COLUMN1', type: 'string' },
		{ name: 'COLUMN2', type: 'string' },
		{ name: 'COLUMN3', type: 'string' },
		{ name: 'COLUMN4', type: 'string' },
		{ name: 'COLUMN5', type: 'string' },
		{name: 'icheck', type: 'bool',
            convert: function(v){
                return (v === "A" || v === true) ? true : false;
            }
        },
        {name: 'ucheck', type: 'bool',
            convert: function(v){
                return (v === "A" || v === true) ? true : false;
            }
        },
        {name: 'dcheck', type: 'bool',
            convert: function(v){
                return (v === "A" || v === true) ? true : false;
            }
        }
    ]
});