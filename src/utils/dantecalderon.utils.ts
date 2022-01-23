interface PageCaptionResult {
  options: Record<string, any>
  caption: string
}


function parseJSON(jsonString: string) {
  try {
    return JSON.parse(jsonString)
  } catch {
    undefined;
  }
}

export function parseCaption(captionData: string): PageCaptionResult {
  try {
    const endOfJSONString = captionData.indexOf('}')
    const jsonString = (captionData.substring(0, endOfJSONString) + '}').replace(/”/g, '"') // Notions doesn't allow to use "
    
    const options = parseJSON(jsonString)
    const caption = captionData.substring(options ? endOfJSONString + 1 : 0).trim()
    return {
      options: options || {},
      caption
    };
  } catch(error) {
    // Caption doesn't have valid options
    return { options: {}, caption: '' }
  }
}

