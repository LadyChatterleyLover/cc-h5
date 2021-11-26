import http from "."

export const getTemplate = () => {
  return http.get('/getTemplate')
}

export const saveTemplate = ({ title, category, cover, config }: { title: string, cover: string, category: string, config: any }) => {
  return http.post('/saveTemplate', {
    title,
    category,
    cover,
    config
  })
}