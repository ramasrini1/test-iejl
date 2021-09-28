#!/bin/bash
# Release script
# bash release.sh

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$BRANCH" != "main" ]]; then
  echo 'Releases can only be deployed from main branch. Aborting';
  exit 1;
fi

CURRENT_VERSION=$(cat package.json | grep '"version"' | cut -d '"' -f 4)
TO_UPDATE=(
    package.json
    package-lock.json
)

echo -n "Current version is $CURRENT_VERSION, select new version: "
read NEW_VERSION
echo "Creating version $NEW_VERSION ...\n"

for file in "${TO_UPDATE[@]}"
do
    echo "Patching $file ..."
    sed -i "s/$CURRENT_VERSION/$NEW_VERSION/g" $file
    git add $file
done

git commit -m "Releasing v$NEW_VERSION"
git push

git tag -a v$NEW_VERSION -m "Release v$NEW_VERSION"
git push origin v$NEW_VERSION

echo
echo "All done, v$NEW_VERSION released ^_^"
