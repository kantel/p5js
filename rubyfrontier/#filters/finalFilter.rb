def finalFilter(adrPageTable)
  # adrPageTable[:renderedtext] = process(adrPageTable[:renderedtext])
  if adrPageTable[:kramdown]
    adrPageTable[:renderedtext] = adrPageTable[:renderedtext].gsub("><![CDATA", ">%<![CDATA")
    adrPageTable[:renderedtext] = adrPageTable[:renderedtext].gsub("]]>", "%]]>")
  end
  # Unnötige leere Paragraphen entfernen:
  adrPageTable[:renderedtext] = adrPageTable[:renderedtext].gsub("<p></p>\n\n", "")
  if adrPageTable[:xml]
    adrPageTable[:renderedtext] = adrPageTable[:renderedtext].gsub("<p><item>", "<item>")
    adrPageTable[:renderedtext] = adrPageTable[:renderedtext].gsub("</item></p>", "</item>")
  end
end
