# FlatListScrollIssue

1. Run the app on android
2. When the app loads, scroll to the very bottom of the flat list so you can see the 200px bottom padding
3. Now whenever scrollToEnd is called, the FlatList will scroll back up, ignoring the padding.
