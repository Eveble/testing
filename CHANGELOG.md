# [3.0.0](https://github.com/eveble/testing/compare/v2.1.3...v3.0.0) (2023-12-09)


### Bug Fixes

* remove empty methods ([cdd3358](https://github.com/eveble/testing/commit/cdd3358dc042e0009e037b0830bdadf6e33c6e0e))
* remove legacy exports ([5da1a45](https://github.com/eveble/testing/commit/5da1a45773fb2fa460c1b8074040444ed6595ee9))
* update evebleChai exports ([bfd838f](https://github.com/eveble/testing/commit/bfd838f2e1c7e0636def8d8295806a0a1c406d9a))


* refactor!: update Scenario to match e2e API ([3f5e109](https://github.com/eveble/testing/commit/3f5e10944b2e0e90e824dd7467e14fa1560eaef6))
* refactor!: update EventSourceableBDDAsserter to match e2e API ([124f309](https://github.com/eveble/testing/commit/124f309c69a1f4262c77d852bd6add348fa7237e))
* refactor!: update types to match e2e API ([6e419df](https://github.com/eveble/testing/commit/6e419df964ee39c601f605e7e1ade7618061a0df))
* refactor!: rename InvalidSUTError to InvalidEventSourceableError ([ad575f3](https://github.com/eveble/testing/commit/ad575f31bd10915f00f796d1ba99790a30873561))
* refactor!: chaiStructAssertion to evebleChai supporting new events, commands api ([3074278](https://github.com/eveble/testing/commit/3074278b7753d51382b824f4acbd525a52ae7b6d))


### Features

* add BDD chains ([e301ba0](https://github.com/eveble/testing/commit/e301ba0e2e7902a033bb1f956fceef460235386c))
* add Feature component ([0a87cb4](https://github.com/eveble/testing/commit/0a87cb4b7731cc8e6894f14a220bafee20a50ca6))
* **errors:** add EventSourceableFeatureMappingsNotFoundError ([517ad11](https://github.com/eveble/testing/commit/517ad11d09f24d2514426c7a8c5a7cf85aa915c1))
* **errors:** add InvalidScenarioError ([68f0357](https://github.com/eveble/testing/commit/68f0357e87bfc1352d413c32993ab714f8776417))


### BREAKING CHANGES

* update Scenario to match e2e API
* update EventSourceableBDDAsserter to match e2e API
* update types to match e2e API
* rename InvalidSUTError to InvalidEventSourceableError
* chaiStructAssertion to evebleChai supporting new events, commands api

## [2.1.3](https://github.com/eveble/testing/compare/v2.1.2...v2.1.3) (2023-04-23)


### Bug Fixes

* **docs:** fix docs build do to issue with node_modules types ([a43e083](https://github.com/eveble/testing/commit/a43e08377cfbc5636e04351e8ee84f889fb35e0d))

## [2.1.2](https://github.com/eveble/testing/compare/v2.1.1...v2.1.2) (2023-04-21)


### Bug Fixes

* **bdd:** ensure published event names are matching expected one ([b6374d1](https://github.com/eveble/testing/commit/b6374d129654c3e0ed76f98ca83f59ee2b3612eb))
* **docs:** update docs build process ([6a88cb0](https://github.com/eveble/testing/commit/6a88cb09bca61295667f3e2f5e9ba18db52c2aa8))
* issue with Chai types ([76a9123](https://github.com/eveble/testing/commit/76a9123f805d0606b82fbe683e63762946df5970))

## [2.1.1](https://github.com/eveble/testing/compare/v2.1.0...v2.1.1) (2020-08-30)


### Bug Fixes

* remove dependencies on state verification ([d41dc8b](https://github.com/eveble/testing/commit/d41dc8bb3befa2011837f5967183a48b4443f8a2))

# [2.1.0](https://github.com/eveble/testing/compare/v2.0.0...v2.1.0) (2020-07-29)


### Features

* allow empty array on expect ([f8ea003](https://github.com/eveble/testing/commit/f8ea003f347461758a68f375e766359566980a8f))

# [2.0.0](https://github.com/eveble/testing/compare/v1.0.2...v2.0.0) (2020-07-25)


* feat!: add support for verifying expected state ([b1ff16f](https://github.com/eveble/testing/commit/b1ff16f1971e7ce1f35701afc44207dc51a77cba))


### BREAKING CHANGES

* move support for passing TestConfig instance from scenario verification to Scenario construction

## [1.0.2](https://github.com/eveble/testing/compare/v1.0.1...v1.0.2) (2020-07-23)


### Bug Fixes

* **deps:** bump @eveble/eveble to latest ([b232006](https://github.com/eveble/testing/commit/b232006aa1fffa985f9690bdb377c2bf8e0b8547))
* **deps:** bump @eveble/helpers to latest ([536bde0](https://github.com/eveble/testing/commit/536bde048ed428908f3562fb95285cb1e8a678cb))

## [1.0.1](https://github.com/eveble/testing/compare/v1.0.0...v1.0.1) (2020-07-20)


### Bug Fixes

* force release ([b86179c](https://github.com/eveble/testing/commit/b86179c3636f3d720a3f55f7e2f501b6f9b14b81))

# 1.0.0 (2020-07-05)


### Bug Fixes

* assign type to expectedEvents as Function ([1e4840b](https://github.com/eveble/testing/commit/1e4840ba092290d3d6dc50ff4f5cc963936a4f1e))
* disable no-unused-vars on types ([46c308f](https://github.com/eveble/testing/commit/46c308f50482f20a2d1ac3e3b923110da1779767))
* update env file for test environment ([49be192](https://github.com/eveble/testing/commit/49be1928a82f2a4b9426e871fc27d1d0fa4a84ab))


### Features

* **bdd:** add EventSourceableBDDAsserter ([e72be28](https://github.com/eveble/testing/commit/e72be28739bc4c9a4557c81198d2d9b0908da2b1))
* **testing:** add Scenario ([fbc94e3](https://github.com/eveble/testing/commit/fbc94e300f2704e0a4801b97d54a820e5b7fe3ae))
* add TestConfig ([8088a93](https://github.com/eveble/testing/commit/8088a93e9ce7738e378111f9dade696529e34649))
* **chai:** add Struct assertion for chai ([8075cf0](https://github.com/eveble/testing/commit/8075cf0bb73471dfd16cee021ecd41f9859dc348))
