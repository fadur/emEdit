(($) ->
	
	Editor = {
		init: (options, el) ->
			$(el).delegate 'textarea', 'keyup' , (e) ->
				text =  $(this).val()
				Editor.write(options, text)
			$(el).delegate 'input', 'keyup' , (e) ->
				text =  $(this).val()
				Editor.title(options, text)
			
		write: (options, input) ->
			m = new Showdown.converter()
			html = m.makeHtml(input)
			$(options.output+' .html').html(html)
			
		title: (options, title) ->
			$(options.output+' .title').html('<h1>'+title+'</h1>')
	
	}
	
	
	
	jQuery.fn.mEditor = (options) ->
		Editor.init(options, this)

) jQuery	