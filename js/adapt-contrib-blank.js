define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

    var Blank = ComponentView.extend({
        
        postRender: function() {
            this.setReadyStatus();
            this.setCompletionStatus();
        }
        
    });
    
    Adapt.register("blank", Blank);
    
});