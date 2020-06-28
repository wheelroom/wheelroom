# Copying fragments from modules to this src folder

echo "Cleaning up src/copied-fragments"
mkdir -p src/copied-fragments
rm -rf src/copied-fragments/*

echo "@wheelroom/blog-wheel"
cp src-blog-wheel/models/blog/fragment.js src/copied-fragments/blog-fragment.js 
cp src-blog-wheel/models/blog-section/fragment.js src/copied-fragments/blog-section-fragment.js 

echo "@wheelroom/core"
cp src-core/models/action/fragment.js src/copied-fragments/action-fragment.js 
cp src-core/models/embed/fragment.js src/copied-fragments/embed-fragment.js 
cp src-core/models/globals/fragment.js src/copied-fragments/globals-fragment.js 
cp src-core/models/media-breakpoint/fragment.js src/copied-fragments/media-breakpoint-fragment.js 
cp src-core/models/page/fragment.js src/copied-fragments/page-fragment.js 

echo "@wheelroom/navigation-wheel"
cp src-navigation-wheel/models/navigation/fragment.js src/copied-fragments/navigation-fragment.js 
cp src-navigation-wheel/models/navigation-section/fragment.js src/copied-fragments/navigation-section-fragment.js 
cp src-navigation-wheel/models/navigation-segment/fragment.js src/copied-fragments/navigation-segment-fragment.js 

echo "@wheelroom/table-wheel"
cp src-table-wheel/models/table-row/fragment.js src/copied-fragments/table-row-fragment.js 
cp src-table-wheel/models/table-section/fragment.js src/copied-fragments/table-section-fragment.js 

echo "@wheelroom/text-wheel"
cp src-text-wheel/models/text-section/fragment.js src/copied-fragments/text-section-fragment.js 

echo "@wheelroom/topic-wheel"
cp src-topic-wheel/models/topic/fragment.js src/copied-fragments/topic-fragment.js 
cp src-topic-wheel/models/topic-section/fragment.js src/copied-fragments/topic-section-fragment.js 

