# Project Delivery Work Flow
To make this library available as a dependency consumed by mission-critical applications, we publish semantically versioned releases. This allows us to continuously deliver new functionality without putting the performance of the applications which treat this repository as a dependency at risk. What follows is a brief explanation of how we publish a release and implement semantic versioning for this project.

## Publishing a Release in GitHub
A release is published in GitHub under the “Releases” tab.  A release is made up of two parts; first, a tag; second, a target. A tag is essentially an alias that is applied to a commit hash. The value of the tag is the version of the release, and the target selected in GitHub is always to be the master branch.*

The target will then be the most recent commit in the master branch. Delivering new commits to master will not change the target of the tag. The target for the tag will remain the same commit hash unless a new release is published in Github with the same tag or the tag is removed and added via the git cli.

## Questions
Do tags persist beyond the lifecycle of the branch which was its original target?
	- Yes; if you publish a branch and publish a tag to that branch,  the tag will persist even after the branch is deleted.

## Specifying a Commit-ish as Dependency in Consumer 
`npm i fedspendingtransparency/data-transparency-ui#vX.X.X` 

## Semantic Versioning
We are adopting this method for handling open source packaging in order to avoid introducing breaking changes to consumers who aren’t opting in to the newest iteration of the package.

**X. X . X :** 
	- Third positional number: maintenance version changes, bug fixes only
	- Second positional number: minor version changes; potential for breaking changes.
	- First positional number: major version changes; project specific moving toward a project milestone.

## Goals
	- Limited number of long-term branches.
	- Safe delivery workflow avoiding breaking changes
	- Continuous delivery

## Things to Consider Moving Forward
	- What are our Project Milestones?
	- How can we improve our Delivery Workflow

*The only exception to this is when a past version is supported via a maintenance version change. In this exceptional case, the following procedure is used: (a) tag to be incremented is checked out  `git checkout vX.X.X` from which (b) a new branch is checked out, the fix is delivered and published in the remote and finally (c) the incremented tag is applied to the branch, and the branch deleted.