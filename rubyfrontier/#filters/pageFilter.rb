def pageFilter(adrPageTable)
  # adrPageTable[:bodytext] = process(adrPageTable[:bodytext])
  # kramdown
  if adrPageTable[:kramdown]
    adrPageTable[:bodytext] = Kramdown::Document.new(adrPageTable[:bodytext],
    :auto_ids => false, :entity_output => :numeric).to_html.gsub("&quot;", '"')
  # but kramdown also substitutes &lt;% for <% and %&gt; for %>, so if we have macros they've just been stripped
    adrPageTable[:bodytext] = adrPageTable[:bodytext].gsub("&lt;%", "<%")
    adrPageTable[:bodytext] = adrPageTable[:bodytext].gsub("%&gt;", "%>")
  # and kramdown substitutes =&gt; for => so we have to substitute that back
    adrPageTable[:bodytext] = adrPageTable[:bodytext].gsub("=&gt;", "=>")
  # we also need macros for removing the "smart quotes"
    adrPageTable[:bodytext] = adrPageTable[:bodytext].gsub("&#8220;", "\"")
    adrPageTable[:bodytext] = adrPageTable[:bodytext].gsub("&#8221;", "\"")
  end
end