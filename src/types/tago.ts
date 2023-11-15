export type TagoWidget = {
  analysis_run: string | null
  dashboard: string
  display: {
    header_buttons: []
    help: string
    parameters: []
    theme: {
      color: {
        background: string
        header: string
      }
    }
    url: string
    header_size: number
    user: {
      id: string
      name: string
      options: {
        date_format: string
        time_format: string
      }
      timezone: string
      type: string
    }
    variables: {
      variable: string
      origin: {
        id: string
        bucket: string
      }
    }[]
  }
  data: {
    qty: number
    origin: string
    variables: string[]
  }[]
  resource: []
  id: string
  label: string
  realtime: string
  type: string
}
