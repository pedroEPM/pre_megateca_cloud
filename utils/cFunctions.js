export const splitedAllWords = (allWords) => {
  try {
    const allWordsSplited = []
    allWords.split(' ').forEach(word => {
      if (word.trim() !== '' && word.trim().length > 2) allWordsSplited.push(word.trim())
    })
    return allWordsSplited
  } catch (error) {
    console.log(error)
    return []
  }
}

export const setDate = (date) => {
  try {
    return new Date(date)
  } catch (error) {
    console.log(error)
  }
}

export const setParams = (reqQuery) => {
  try {
    const cQuery = {}
    if (reqQuery.keywords) {
      const allWords = splitedAllWords(reqQuery.keywords)
      if (allWords.length > 0) cQuery.keywords = allWords
    }

    if (reqQuery.gteDate && !reqQuery.lteDate) {
      cQuery.date = {
        gte: setDate(reqQuery.gteDate),
        lte: setDate(reqQuery.gteDate)
      }
    }

    if (reqQuery.gteDate && reqQuery.lteDate) {
      cQuery.date = {
        gte: setDate(reqQuery.gteDate),
        lte: setDate(reqQuery.lteDate)
      }
    }

    // isFirstTime === -1 is for search and 1 y for counter
    cQuery.isFirstTime = reqQuery.isFirstTime ?? -1
    cQuery.limit = reqQuery.limit ?? 20
    cQuery.mode = reqQuery.mode ?? 'pdfs'
    cQuery.page = reqQuery.page ?? 1
    cQuery.sort = reqQuery.sort ?? 1
    cQuery.skip = Math.abs(+cQuery.page - 1) * +cQuery.limit

    return cQuery
  } catch (error) {
    console.log(error)
  }
}
