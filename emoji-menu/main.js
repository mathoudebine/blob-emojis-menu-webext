var clipboard = new Clipboard('.emoji', {
    target: function(trigger) {
        return trigger;
    }
});