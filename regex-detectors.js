var regex_dict = {
  integer: /^\d+$/,
  "v*": /^v\d$/,

  // unstable
  "v*beta*": /^v\d+beta\d*$/,
  "v*rc*": /^v\d+rc\d*$/,
  "v*alpha*": /^v\d+alph\d*$/,
  "v*dev*": /^v\d+dev\d*$/,
  "v*pre*": /^v\d+pre\d*$/,

  "v*beta*.*": /^v\d+beta\d+\.\d+/,
  "v*rc*.*": /^v\d+rc\d+\.\d+/,
  "v*alpha*.*": /^v\d+alpha\d+\.\d+/,
  "v*dev*.*": /^v\d+dev\d+\.\d+/,
  "v*pre*.*": /^v\d+pre\d+\.\d+/,
  "v*snapshot*.*": /^v\d+snapshot\d+/,

  // SNAPSHOT
  "semver-SNAPSHOT*": /^\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/,
  "semver-SNAPSHOT*": /^\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/,
  "semver-SNAPSHOT*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/,
  "semver-SNAPSHOT*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/,

  "semver-SNAPSHOT*.*": /^\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  "semver-SNAPSHOT*.*": /^\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  "semver-SNAPSHOT*.*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  "semver-SNAPSHOT*.*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  // rc
  "semver-rc*": /^\d+\.\d+(\.|-)rc\d*$/,
  "semver-rc*": /^\d+\.\d+\.\d+(\.|-)rc\d*$/,
  "semver-rc*": /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/,
  "semver-rc*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/,
  "semver-rc*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/,

  "semver-rc*.*": /^\d+\.\d+-rc\d*\.\d+$/,
  "semver-rc*.*": /^\d+\.\d+\.\d+-rc\d*\.\d+$/,
  "semver-rc*.*": /^\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/,
  "semver-rc*.*": /^\d+\.\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/,
  "semver-rc*.*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/,

  // beta
  "semver-beta*": /^\d+\.\d+(\.|-)beta\d*$/,
  "semver-beta*": /^\d+\.\d+\.\d+(\.|-)beta\d*$/,
  "semver-beta*": /^\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/,
  "semver-beta*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/,
  "semver-beta*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/,

  "semver-beta*.*": /^\d+\.\d+(\.|-)beta\d*\.\d+$/,
  "semver-beta*.*": /^\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/,
  "semver-beta*.*": /^\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/,
  "semver-beta*.*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/,
  "semver-beta*.*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/,

  // alpha
  "semver-alpha*": /^\d+\.\d+(\.|-)alpha\d*$/,
  "semver-alpha*": /^\d+\.\d+\.\d+(\.|-)alpha\d*$/,
  "semver-alpha*": /^\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/,
  "semver-alpha*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/,
  "semver-alpha*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/,

  "semver-alpha*.*": /^\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  "semver-alpha*.*": /^\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  "semver-alpha*.*": /^\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  "semver-alpha*.*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  "semver-alpha*.*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,

  // preview
  "semver-preview*": /^\d+\.\d+(\.|-)preview$/,
  "semver-preview*": /^\d+\.\d+\.\d+(\.|-)preview$/,
  "semver-preview*": /^\d+\.\d+\.\d+\.\d+(\.|-)preview$/,
  "semver-preview*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview$/,
  "semver-preview*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview$/,

  "semver-preview*.*": /^\d+\.\d+(\.|-)preview\d*\.\d+$/,
  "semver-preview*.*": /^\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,
  "semver-preview*.*": /^\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,
  "semver-preview*.*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,
  "semver-preview*.*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,

  // dev
  "semver-dev*": /^\d+\.\d+(\.|-)dev\d*$/,
  "semver-dev*": /^\d+\.\d+\.\d+(\.|-)dev\d*$/,
  "semver-dev*": /^\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/,
  "semver-dev*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/,
  "semver-dev*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/,

  "semver-dev*.*": /^\d+\.\d+(\.|-)dev\d*\.\d+$/,
  "semver-dev*.*": /^\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/,
  "semver-dev*.*": /^\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/,
  "semver-dev*.*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/,
  "semver-dev*.*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/,

  // pre
  "semver-pre*": /^\d+\.\d+(\.|-)pre\d*$/,
  "semver-pre*": /^\d+\.\d+\.\d+(\.|-)pre\d*$/,
  "semver-pre*": /^\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/,
  "semver-pre*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/,
  "semver-pre*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/,

  "semver-pre*.*": /^\d+\.\d+(\.|-)pre\d*\.\d+$/,
  "semver-pre*.*": /^\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/,
  "semver-pre*.*": /^\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/,
  "semver-pre*.*": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/,
  "semver-pre*.*": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/,

 

  // date
  "date(yyyy.mm.dd)": /^\d{4}\.\d{2}\.\d{2}$/,
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
  "semver-2": /^\d+\.\d+$/,
  "semver-3": /^\d+\.\d+\.\d+$/,
  "semver-4": /^\d+\.\d+\.\d+\.\d+$/,
  "semver-5": /^\d+\.\d+\.\d+\.\d+\.\d+$/,
  "semver-6": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+$/,

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
  "semver.rc*.date": /^\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  // semver.rc*.date(yyyy.mm)
  "semver.rc*.date": /^\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  // semver.rc*.date(yyyy)
  "semver.rc*.date": /^\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d.\d{4}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  // semver.rc*.date(yyyy-mm-dd)
  "semver.rc*.date": /^\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  // semver.rc*.date(yyyy-mm)
  "semver.rc*.date": /^\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  "semver.rc*.date":
    /\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  // semver.rc*.date(yyyy/mm/dd)
  "semver.rc*.date": /^\d+\.\d+(\.|-)rc\d.\d{4}\/\d{2}\/\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+(\.|-)rc\d.\d{4}\/\d{2}\/\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  // semver.rc*.date(yyyy/mm)
  "semver.rc*.date": /^\d+\.\d+.rc\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.rc*.date": /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  // semver.rc*.date(yyyymmdd)
  "semver.rc*.date":
    /^\d+\.\d+.rc\d.20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  // semver.rc*.date(Month mm)
  "semver.rc*.date":
    /^\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  "semver.rc*.date":
    /^\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,

  // semver.beta*.date(yyyy.mm.dd)
};
