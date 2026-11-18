REGISTRY    := nexus.maple.maceroc.com/docker_millegrilles
GROUP       := millegrilles
IMAGE       := pmtiles-server
# Default build number — override with BUILD_NUMBER env var (set by Jenkins)
BUILD       := $(or $(BUILD_NUMBER), 1)
# Image version = build number
VERSION     := $(BUILD)
# Full image reference
IMAGE_REF   := $(REGISTRY)/$(GROUP)/$(IMAGE):$(VERSION)

DOCKER      := docker
BUILD_DIR   := $(dir $(lastword $(MAKEFILE_LIST)))

.PHONY: build push release clean help

build: ## Build the pmtiles-server image
	@echo "Building $(IMAGE_REF)..."
	$(DOCKER) build -t $(IMAGE_REF) $(BUILD_DIR)

push: build ## Build and push to Nexus
	@echo "Pushing $(IMAGE_REF)..."
	$(DOCKER) push $(IMAGE_REF)

release: push ## Alias for push

clean: ## Remove the local image
	@echo "Removing $(IMAGE_REF)..."
	$(DOCKER) rmi $(IMAGE_REF) 2>/dev/null || true

help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'
