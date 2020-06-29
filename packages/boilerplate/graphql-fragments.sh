# Copying fragments from modules to this src folder

echo "Cleaning up src/copied-fragments"
mkdir -p src/graphql-fragments
rm -rf src/graphql-fragments/*

echo "@wheelroom/wheel-blog"
cp ./node_modules/@wheelroom/wheel-blog/dist/models/blog/fragment.js src/graphql-fragments/blog-fragment.js
cp ./node_modules/@wheelroom/wheel-blog/dist/models/blog-section/fragment.js src/graphql-fragments/blog-section-fragment.js

echo "@wheelroom/core"
cp ./node_modules/@wheelroom/core/dist/models/action/fragment.js src/graphql-fragments/action-fragment.js
cp ./node_modules/@wheelroom/core/dist/models/embed/fragment.js src/graphql-fragments/embed-fragment.js
cp ./node_modules/@wheelroom/core/dist/models/globals/fragment.js src/graphql-fragments/globals-fragment.js
cp ./node_modules/@wheelroom/core/dist/models/media-breakpoint/fragment.js src/graphql-fragments/media-breakpoint-fragment.js
cp ./node_modules/@wheelroom/core/dist/models/page/fragment.js src/graphql-fragments/page-fragment.js

echo "@wheelroom/wheel-navigation"
cp ./node_modules/@wheelroom/wheel-navigation/dist/models/navigation/fragment.js src/graphql-fragments/navigation-fragment.js
cp ./node_modules/@wheelroom/wheel-navigation/dist/models/navigation-section/fragment.js src/graphql-fragments/navigation-section-fragment.js
cp ./node_modules/@wheelroom/wheel-navigation/dist/models/navigation-segment/fragment.js src/graphql-fragments/navigation-segment-fragment.js

echo "@wheelroom/wheel-table"
cp ./node_modules/@wheelroom/wheel-table/dist/models/table-row/fragment.js src/graphql-fragments/table-row-fragment.js
cp ./node_modules/@wheelroom/wheel-table/dist/models/table-section/fragment.js src/graphql-fragments/table-section-fragment.js

echo "@wheelroom/wheel-text"
cp node_modules/@wheelroom/wheel-text/dist/models/text-section/fragment.js src/graphql-fragments/text-section-fragment.js

echo "@wheelroom/topic-wheel"
cp node_modules/@wheelroom/wheel-topic/dist/models/topic/fragment.js src/graphql-fragments/topic-fragment.js
cp node_modules/@wheelroom/wheel-topic/dist/models/topic-section/fragment.js src/graphql-fragments/topic-section-fragment.js

