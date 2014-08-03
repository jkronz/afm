module ApplicationHelper
  def navigation_tab(text, path)
    options = current_page?(path) ? {class: "active"} : {}
    content_tag(:li, options) do
      link_to text, path
    end
  end

end
