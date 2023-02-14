# ICEW 2023 - REPLICATION PACKAGE
## An empirical study of Web API versioning practices


This package contains three raw data sources of the results thoroughly analyzed and discussed in the empirical study:

- `all-version.json`: A JSON file that contains the list of the 5514 distinct version identifiers extracted from the `info.version` field. This list was used as an input to locate version identifiers in URLs (Paths, and Sever).
- `regex-detector.json`: A JSON file that contains the set regular expression based detectors employed to classify the formats of the version identifiers extracted from each for `info.version` field, the Paths URLs, and Server URLS.
- `versions_formats.json.zip`: A compressed JSON file that contains the raw data of the classification results of the versions detected in each API commit. `api_spec_id` is an identifier of distinct APIs, and `id` is the commit unique identifiers. The other fields are self-explanatory. 
