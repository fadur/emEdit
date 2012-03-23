
  (function($) {
    var Editor;
    Editor = {
      init: function(options, el) {
        $(el).delegate('textarea', 'keyup', function(e) {
          var text;
          text = $(this).val();
          return Editor.write(options, text);
        });
        return $(el).delegate('input', 'keyup', function(e) {
          var text;
          text = $(this).val();
          return Editor.title(options, text);
        });
      },
      write: function(options, input) {
        var html, m;
        m = new Showdown.converter();
        html = m.makeHtml(input);
        return $(options.output + ' .html').html(html);
      },
      title: function(options, title) {
        return $(options.output + ' .title').html('<h1>' + title + '</h1>');
      }
    };
    return jQuery.fn.mEditor = function(options) {
      return Editor.init(options, this);
    };
  })(jQuery);
