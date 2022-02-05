Nothing:
	@echo "No targets provided. Stop."

.PHONY: build
build:
	@yarn build

.PHONY: publish
publish:
	@aws s3 sync build s3://jeremybruceadams.io --profile jba

.PHONY: build-publish
build-publish: build publish
