# Copying fragments from Wheel modules to this src/ folder

echo "Cleaning up src/graphql-fragments"
mkdir -p src/graphql-fragments
rm -rf src/graphql-fragments/*

if [ -d "node_modules/@wheelroom/core" ]; then
    echo "Copying fragments from @wheelroom/core"
    cp node_modules/@wheelroom/core/src/models/action/fragment.js src/graphql-fragments/action-fragment.js
    cp node_modules/@wheelroom/core/src/models/embed/fragment.js src/graphql-fragments/embed-fragment.js
    cp node_modules/@wheelroom/core/src/models/globals/fragment.js src/graphql-fragments/globals-fragment.js
    cp node_modules/@wheelroom/core/src/models/media-breakpoint/fragment.js src/graphql-fragments/media-breakpoint-fragment.js
    cp node_modules/@wheelroom/core/src/models/page/fragment.js src/graphql-fragments/page-fragment.js
fi

if [ -d "node_modules/@wheelroom/wheel-blog" ]; then
    echo "Copying fragments from @wheelroom/wheel-blog"
    cp node_modules/@wheelroom/wheel-blog/src/models/blog/fragment.js src/graphql-fragments/blog-fragment.js
    cp node_modules/@wheelroom/wheel-blog/src/models/blog-section/fragment.js src/graphql-fragments/blog-section-fragment.js
fi

if [ -d "node_modules/@wheelroom/wheel-navigation" ]; then
    echo "Copying fragments from @wheelroom/wheel-navigation"
    cp node_modules/@wheelroom/wheel-navigation/src/models/navigation/fragment.js src/graphql-fragments/navigation-fragment.js
    cp node_modules/@wheelroom/wheel-navigation/src/models/navigation-section/fragment.js src/graphql-fragments/navigation-section-fragment.js
    cp node_modules/@wheelroom/wheel-navigation/src/models/navigation-segment/fragment.js src/graphql-fragments/navigation-segment-fragment.js
fi

if [ -d "node_modules/@wheelroom/wheel-table" ]; then
    echo "Copying fragments from @wheelroom/wheel-table"
    cp node_modules/@wheelroom/wheel-table/src/models/table-row/fragment.js src/graphql-fragments/table-row-fragment.js
    cp node_modules/@wheelroom/wheel-table/src/models/table-section/fragment.js src/graphql-fragments/table-section-fragment.js
fi

if [ -d "node_modules/@wheelroom/wheel-text" ]; then
    echo "Copying fragments from @wheelroom/wheel-text"
    cp node_modules/@wheelroom/wheel-text/src/models/text-section/fragment.js src/graphql-fragments/text-section-fragment.js
fi

if [ -d "node_modules/@wheelroom/wheel-topic" ]; then
    echo "Copying fragments from @wheelroom/wheel-topic"
    cp node_modules/@wheelroom/wheel-topic/src/models/topic/fragment.js src/graphql-fragments/topic-fragment.js
    cp node_modules/@wheelroom/wheel-topic/src/models/topic-section/fragment.js src/graphql-fragments/topic-section-fragment.js
fi
