@echo off
# Copying fragments from modules to this src folder

mkdir -p copied-fragments
echo "@wheelroom/blog-wheel"
cp src-blog-wheel/models/blog/fragment.js copied-fragments/blog-fragment.js 
cp src-blog-wheel/models/blog-section/fragment.js copied-fragments/blog-section-fragment.js 

echo "@wheelroom/core"
cp src-core/models/embed/fragment.js copied-fragments/embed-fragment.js 
cp src-core/models/globals/fragment.js copied-fragments/globals-fragment.js 
cp src-core/models/media-breakpoint/fragment.js copied-fragments/media-breakpoint-fragment.js 
cp src-core/models/page/fragment.js copied-fragments/page-fragment.js 

echo "@wheelroom/navigation-wheel"
cp src-navigation-wheel/models/navigation/fragment.js copied-fragments/navigation-fragment.js 
cp src-navigation-wheel/models/navigation-section/fragment.js copied-fragments/navigation-section-fragment.js 
cp src-navigation-wheel/models/navigation-segment/fragment.js copied-fragments/navigation-segment-fragment.js 

echo "@wheelroom/table-wheel"
cp src-table-wheel/models/table/fragment.js copied-fragments/table-fragment.js 
cp src-table-wheel/models/table-row/fragment.js copied-fragments/table-row-fragment.js 
cp src-table-wheel/models/table-section/fragment.js copied-fragments/table-section-fragment.js 

echo "@wheelroom/text-wheel"
cp src-text-wheel/models/text/fragment.js copied-fragments/text-fragment.js 
cp src-text-wheel/models/text-section/fragment.js copied-fragments/text-section-fragment.js 

echo "@wheelroom/topic-wheel"
cp src-topic-wheel/models/topic/fragment.js copied-fragments/topic-fragment.js 
cp src-topic-wheel/models/topic-section/fragment.js copied-fragments/topic-section-fragment.js 
cp src-topic-wheel/models/action/fragment.js copied-fragments/action-fragment.js 

