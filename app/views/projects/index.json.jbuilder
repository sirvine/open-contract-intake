json.array!(@projects) do |project|
  json.extract! project, :name, :spend
  json.url project_url(project, format: :json)
end