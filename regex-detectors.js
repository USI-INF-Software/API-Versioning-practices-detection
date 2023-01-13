var regex_dict = {
  integer: /^\d+$/,
  "v*": /^v\d$/,

  // unstable
  "v*beta*": /^v\d+beta\d*$/,
  "v*rc*": /^v\d+rc\d*$/,
  "v*alpha*": /^v\d+alpha\d*$/,
  "v*dev*": /^v\d+dev\d*$/,
  "v*pre*": /^v\d+pre\d*$/,

  "v*beta*.*": /^v\d+beta\d+\.\d+$/,
  "v*rc*.*": /^v\d+rc\d+\.\d+$/,
  "v*alpha*.*": /^v\d+alpha\d+\.\d+$/,
  "v*dev*.*": /^v\d+dev\d+\.\d+$/,
  "v*pre*.*": /^v\d+pre\d+\.\d+$/,
  "v*snapshot*.*": /^v\d+snapshot\d+$/,

  // SNAPSHOT
  "semver-SNAPSHOT*": /^(v|)\d+\.\d+(\.|-)SNAPSHOT\d*$/,
  "semver-SNAPSHOT*": /^(v|)\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/,
  "semver-SNAPSHOT*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/,
  "semver-SNAPSHOT*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/,
  "semver-SNAPSHOT*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/,

  "semver-SNAPSHOT*.*": /^(v|)\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  "semver-SNAPSHOT*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  "semver-SNAPSHOT*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  "semver-SNAPSHOT*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  // rc
  "semver-rc*": /^(v|)\d+\.\d+(\.|-)rc\d*$/,
  "semver-rc*": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*$/,
  "semver-rc*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/,
  "semver-rc*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/,
  "semver-rc*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/,

  "semver-rc*.*": /^(v|)\d+\.\d+-rc\d*\.\d+$/,
  "semver-rc*.*": /^(v|)\d+\.\d+\.\d+-rc\d*\.\d+$/,
  "semver-rc*.*": /^(v|)\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/,
  "semver-rc*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/,
  "semver-rc*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/,

  // beta
  "semver-beta*": /^(v|)\d+\.\d+(\.|-)beta\d*$/,
  "semver-beta*": /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*$/,
  "semver-beta*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/,
  "semver-beta*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/,
  "semver-beta*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/,

  "semver-beta*.*": /^(v|)\d+\.\d+(\.|-)beta\d*\.\d+$/,
  "semver-beta*.*": /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/,
  "semver-beta*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/,
  "semver-beta*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/,
  "semver-beta*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/,

  // alpha
  "semver-alpha*": /^(v|)\d+\.\d+(\.|-)alpha\d*$/,
  "semver-alpha*": /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*$/,
  "semver-alpha*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/,
  "semver-alpha*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/,
  "semver-alpha*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/,

  "semver-alpha*.*": /^(v|)\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  "semver-alpha*.*": /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  "semver-alpha*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  "semver-alpha*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  "semver-alpha*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,

  // preview
  "semver-preview*": /^(v|)\d+\.\d+(\.|-)preview$/,
  "semver-preview*": /^(v|)\d+\.\d+\.\d+(\.|-)preview$/,
  "semver-preview*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)preview$/,
  "semver-preview*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview$/,
  "semver-preview*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview$/,

  "semver-preview*.*": /^(v|)\d+\.\d+(\.|-)preview\d*\.\d+$/,
  "semver-preview*.*": /^(v|)\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,
  "semver-preview*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,
  "semver-preview*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,
  "semver-preview*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,

  // dev
  "semver-dev*": /^(v|)\d+\.\d+(\.|-)dev\d*$/,
  "semver-dev*": /^(v|)\d+\.\d+\.\d+(\.|-)dev\d*$/,
  "semver-dev*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/,
  "semver-dev*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/,
  "semver-dev*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/,

  "semver-dev*.*": /^(v|)\d+\.\d+(\.|-)dev\d*\.\d+$/,
  "semver-dev*.*": /^(v|)\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/,
  "semver-dev*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/,
  "semver-dev*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/,
  "semver-dev*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/,

  // pre
  "semver-pre*": /^(v|)\d+\.\d+(\.|-)pre\d*$/,
  "semver-pre*": /^(v|)\d+\.\d+\.\d+(\.|-)pre\d*$/,
  "semver-pre*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/,
  "semver-pre*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/,
  "semver-pre*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/,

  "semver-pre*.*": /^(v|)\d+\.\d+(\.|-)pre\d*\.\d+$/,
  "semver-pre*.*": /^(v|)\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/,
  "semver-pre*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/,
  "semver-pre*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/,
  "semver-pre*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/,

 

  // date
  "date(yyyy.mm.dd)": /\d{4}\.\d{2}\.\d{2}$/,
  "date(yyyy.mm)": /^\d{4}\.\d{2}$/,
  "date(yyyy)": /^\d{4}$/,
  "date(yyyy-mm-dd)": /^\d{4}-\d{2}-\d{2}$/,
  "date(yyyy-mm)": /^\d{4}-\d{2}$/,
  "date(yyyy/mm/dd)": /^\d{4}\/\d{2}\/\d{2}$/,
  "date(yyyy/mm)": /^\d{4}\/\d{2}$/,
  "date(yyyymmdd)": /^20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "date(Month mm)":
    /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,

  // semver
  "semver-2": /^(v|)\d+\.\d+$/,
  "semver-3": /^(v|)\d+\.\d+\.\d+$/,
  "semver-4": /^(v|)\d+\.\d+\.\d+\.\d+$/,
  "semver-5": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+$/,
  "semver-6": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+$/,

  "stable*": /^stable\d*$/,
  "latest*": /^latest\d*$/,
  "SNAPSHOT*": /^SNAPSHOT$/,
  "rc*": /^rc\d*$/,
  "beta*": /^beta\d*$/,
  "alpha*": /^alpha\d*$/,
  "preview*": /^preview\d*$/,
  "dev*": /^dev\d*$/,
  "pre*": /^pre\d*$/,
  "develop*": /^develop\d*$/,

  // semver.rc*.date(yyyy.mm.dd)
  "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  // semver.rc*.date(yyyy.mm)
  "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  // semver.rc*.date(yyyy)
  "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d.\d{4}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  // semver.rc*.date(yyyy-mm-dd)
  "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  // semver.rc*.date(yyyy-mm)
  "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  // semver.rc*.date(yyyy/mm/dd)
  "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d.\d{4}\/\d{2}\/\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d.\d{4}\/\d{2}\/\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  // semver.rc*.date(yyyy/mm)
  "semver.rc*.date": /^(v|)\d+\.\d+.rc\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  // semver.rc*.date(yyyymmdd)
  "semver.rc*.date":
    /^(v|)\d+\.\d+.rc\d.20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  // semver.rc*.date(Month mm)
  "semver.rc*.date":
    /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.rc*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,

  // semver.beta*.date(yyyy.mm.dd)
  "semver.beta*.date":
    /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  // semver.beta*.date(yyyymmdd)
  "semver.beta*.date":
    /^(v|)\d+\.\d+.beta\d.20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  // semver.beta*.date(Month mm)
  "semver.beta*.date":
    /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  // semver.beta*.date(yyyy-mm-dd)
  "semver.beta*.date":
    /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  "semver.beta*.date":  
    /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  // semver.beta*.date(yyyy/mm/dd)
  "semver.beta*.date":
    /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
    // semver.beta*.date(yyyy/mm)
  "semver.beta*.date":
    /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/,
  // semver.beta*.date(yyyy)
  "semver.beta*.date":
    /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/,
  // semver.beta*.date(yyyy-mm)
  "semver.beta*.date":
    /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/,
  "semver.beta*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/,
 

   // semver.alpha*.date(yyyy.mm.dd)
  "semver.alpha*.date":
    /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  // semver.alpha*.date(yyyy/mm/dd)
  "semver.alpha*.date":
    /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  // semver.alpha*.date(yyyy-mm-dd)
  "semver.alpha*.date":
    /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  // semver.alpha*.date(yyyy.mm)
  "semver.alpha*.date":
    /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  // semver.alpha*.date(yyyy/mm)
  "semver.alpha*.date":
    /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  // semver.alpha*.date(yyyy-mm)
  "semver.alpha*.date":
    /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  // semver.alpha*.date(Month mm)
  "semver.alpha*.date":
    /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.alpha*.date":
    /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,



};
