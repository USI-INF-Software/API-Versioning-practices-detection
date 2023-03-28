# ICEW 2023 - REPLICATION PACKAGE
## An empirical study of Web API versioning practices


This package contains three raw data sources of the results thoroughly analyzed and discussed in the empirical study:

- `all-version.json`: A JSON file that contains the list of the 5514 distinct version identifiers extracted from the `info.version` field. This list was used as an input to locate version identifiers in URLs (Paths, and Sever).
- `regex-detector.json`: A JSON file that contains the set regular expression based detectors employed to classify the formats of the version identifiers extracted from each for `info.version` field, the Paths URLs, and Server URLS.
- `versions_formats.json.zip`: A compressed JSON file that contains the raw data of the classification results of the versions detected in each API commit. `api_spec_id` is an identifier of distinct APIs, and `id` is the commit unique identifiers. The other fields are self-explanatory. 



### Detailed formats classification results
Number of commits with version identifiers of API releases classified by
their formats. \* stands for an integer and \# stands for an arbitrary
combination of characters:

|                      |                |        |          |        |
|:---------------------|---------------:|-------:|---------:|-------:|
|                      |                |        |          |        |
| **Format**           | `info.version` | `path` | `server` |    All |
| Major version number |          29129 |  45310 |    14944 |  89383 |
| integer              |           3738 |    592 |      144 |   4474 |
| v\*                  |          25391 |  44718 |    14800 |  84909 |
| SemVer               |         114663 |    788 |    18172 | 133623 |
| #semver-2            |            166 |      0 |     4249 |   4415 |
| #semver-3            |            111 |      0 |     2686 |   2797 |
| #semver-6            |              6 |      0 |        0 |      6 |
| semver-2             |          23248 |    772 |     1594 |  25614 |
| semver-2#            |            212 |      0 |     4260 |   4472 |
| semver-3             |          88964 |     22 |     2686 |  91672 |
| semver-3#            |           1448 |      0 |     2697 |   4145 |
| semver-4             |            513 |      3 |        3 |    519 |
| semver-5             |              1 |      3 |        3 |      7 |
| semver-6             |             20 |      3 |        3 |     26 |
| semver-6#            |              2 |      0 |        0 |      2 |
| Tag                  |            845 |   1199 |        6 |   2050 |
| latest\*             |            819 |   1174 |        3 |   1996 |
| stable\*             |             26 |     25 |        3 |     54 |
| Date                 |           5447 |    299 |       27 |   5773 |
| date(Month yy)       |              0 |      3 |        3 |      6 |
| date(Month yyyy)     |             22 |      0 |        0 |     22 |
| date(yyyy)           |             21 |      3 |        3 |     27 |
| date(yyyy-mm)        |             43 |     33 |        3 |     79 |
| date(yyyy-mm-dd)     |           5146 |    245 |        3 |   5394 |
| date(yyyy.m)         |             10 |      0 |        0 |     10 |
| date(yyyy.mm)        |              4 |      3 |        3 |     10 |
| date(yyyy.mm.dd)     |            134 |      3 |        3 |    140 |
| date(yyyy/mm)        |             20 |      3 |        3 |     26 |
| date(yyyy/mm/dd)     |             20 |      3 |        3 |     26 |
| date(yyyymmdd)       |             27 |      3 |        3 |     33 |
| Other                |           1549 |   1354 |        0 |   2309 |

Number of commits with version identifiers of API preview releases
classified by their formats. \* stands for an integer:


|                    |                |        |          |       |
|:-------------------|---------------:|-------:|---------:|------:|
|                    |                |        |          |       |
| **Format**         | `info.version` | `path` | `server` |   All |
| Develop            |            545 |     92 |      106 |   743 |
| dev\*              |            185 |     91 |      104 |   380 |
| develop\*          |             12 |      0 |        2 |    14 |
| semver-dev\*       |            335 |      0 |        0 |   335 |
| semver-dev\*.\*    |             12 |      0 |        0 |    12 |
| v\*dev\*           |              1 |      1 |        0 |     2 |
| Snapshot           |            964 |      0 |       11 |   975 |
| SNAPSHOT\*         |             34 |      0 |        0 |    34 |
| semver-SNAPSHOT\*  |            930 |      0 |       11 |   941 |
| Preview            |            863 |      0 |        0 |   863 |
| date-preview\*     |            830 |      0 |        0 |   830 |
| semver-pre\*.\*    |             10 |      0 |        0 |    10 |
| semver-preview\*   |             23 |      0 |        0 |    23 |
| Alpha              |           3003 |   2339 |       10 |  5352 |
| alpha\*            |             65 |     25 |       10 |   100 |
| semver-alpha\*     |            510 |      0 |        0 |   510 |
| semver-alpha\*.\*  |            385 |      0 |        0 |   385 |
| v\*alpha\*         |           1975 |   2314 |        0 |  4289 |
| v\*alpha\*.\*      |             68 |      0 |        0 |    68 |
| Beta               |          19410 |  15459 |      207 | 35076 |
| \*beta\*           |            105 |      0 |        0 |   105 |
| beta\*             |            339 |     37 |      175 |   551 |
| semver (beta\*)    |            368 |      0 |        0 |   368 |
| semver beta\*      |            557 |      0 |        0 |   557 |
| semver.beta\*.date |              9 |      0 |        0 |     9 |
| v\*.beta           |            254 |     44 |        0 |   298 |
| v\*beta\*          |          15720 |  15378 |       32 | 31130 |
| v\*beta\*.\*       |            638 |      0 |        0 |   638 |
| v\*p\*beta\*       |           1420 |      0 |        0 |  1420 |
| Release Candidate  |            548 |      0 |        0 |   548 |
| rc\*               |             26 |      0 |        0 |    26 |
| semver-rc\*        |            118 |      0 |        0 |   118 |
| semver-rc\*.\*     |            355 |      0 |        0 |   355 |
| semver.rc\*.date   |             49 |      0 |        0 |    49 |

