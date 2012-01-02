Ext.define('CMN.view.common.StatusBar', {
    extend: 'Ext.toolbar.Toolbar',

    alias: 'widget.status',

    cls : 'x-statusbar',
    busyIconCls : 'x-status-busy',
    busyText : 'Loading...',
    autoClear : 5000,

    emptyText : '&nbsp;',

    activeThreadId : 0,

    initComponent : function(){
        if (this.statusAlign === 'right') {
            this.cls += ' x-status-right';
        }
        this.callParent(arguments);
    },

    afterRender : function(){
        this.callParent(arguments);

        var right = this.statusAlign === 'right';
        this.currIconCls = this.iconCls || this.defaultIconCls;
        this.statusEl = Ext.create('Ext.toolbar.TextItem', {
            cls: 'x-status-text ' + (this.currIconCls || ''),
            text: this.text || this.defaultText || ''
        });
        this.progress = {
        	xtype : 'progressbar',
        	id : 'main-progressbar',
        	width : 150
        };

        if (right) {
            this.add('->');
            this.add(this.statusEl);
//            this.add('->');
            this.add(this.progress);
        } else {
            this.insert(0, this.statusEl);
            this.insert(1, '->');
            this.insert(0, this.progress);
//            this.insert(1, '->');
        }
        this.height = 27;
        this.doLayout();
    },

    setStatus : function(o) {
        o = o || {};

        if (Ext.isString(o)) {
            o = {text:o};
        }
        if (o.text !== undefined) {
            this.setText(o.text);
        }
        if (o.iconCls !== undefined) {
            this.setIcon(o.iconCls);
        }

        if (o.clear) {
            var c = o.clear,
                wait = this.autoClear,
                defaults = {useDefaults: true, anim: true};

            if (Ext.isObject(c)) {
                c = Ext.applyIf(c, defaults);
                if (c.wait) {
                    wait = c.wait;
                }
            } else if (Ext.isNumber(c)) {
                wait = c;
                c = defaults;
            } else if (Ext.isBoolean(c)) {
                c = defaults;
            }

            c.threadId = this.activeThreadId;
            Ext.defer(this.clearStatus, wait, this, [c]);
        }
        this.doLayout();
        return this;
    },

    clearStatus : function(o) {
        o = o || {};

        if (o.threadId && o.threadId !== this.activeThreadId) {
            // this means the current call was made internally, but a newer
            // thread has set a message since this call was deferred.  Since
            // we don't want to overwrite a newer message just ignore.
            return this;
        }

        var text = o.useDefaults ? this.defaultText : this.emptyText,
            iconCls = o.useDefaults ? (this.defaultIconCls ? this.defaultIconCls : '') : '';

        if (o.anim) {
            // animate the statusEl Ext.core.Element
            this.statusEl.el.fadeOut({
            	opacity : 0,
            	easing : 'easeOut',
            	duration : 500,
                remove: false,
                useDisplay: true,
                scope: this,
                callback: function(){
                    this.setStatus({
                    	text: text,
                    	iconCls: iconCls
                    });

                    Ext.defer(function() {
                    	this.statusEl.el.fadeIn({
                    		opacity : 1,
                    		easing : 'easeOut',
                    		duration : 500
                    	});
                    }, 1000, this);
                }
            });
        } else {
            // hide/show the el to avoid jumpy text or icon
             this.statusEl.hide();
             this.setStatus({
                 text: text,
                 iconCls: iconCls
             });
             this.statusEl.show();
        }
        this.doLayout();
        return this;
    },

    setText : function(text){
        this.activeThreadId++;
        this.text = text || '';
        if (this.rendered) {
            this.statusEl.setText(this.text);
        }
        return this;
    },

    getText : function(){
        return this.text;
    },

    setIcon : function(cls){
        this.activeThreadId++;
        cls = cls || '';

        if (this.rendered) {
         if (this.currIconCls) {
             this.statusEl.removeCls(this.currIconCls);
             this.currIconCls = null;
         }
         if (cls.length > 0) {
             this.statusEl.addCls(cls);
             this.currIconCls = cls;
         }
        } else {
            this.currIconCls = cls;
        }
        return this;
    },

    showBusy : function(o){
        if (Ext.isString(o)) {
            o = { text: o };
        }
        o = Ext.applyIf(o || {}, {
            text: this.busyText,
            iconCls: this.busyIconCls
        });
        return this.setStatus(o);
    }
});

