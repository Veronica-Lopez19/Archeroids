(function() { this.JST || (this.JST = {}); this.JST["user_show"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<section class="content-sidebar">\n\n  <h2>Menu</h2>\n  <ul class="profile-nav">\n\n    <li>\n      <a href="',  '' ,'">PostsFeed</a>\n    </li>\n\n    <li>\n      <a href="',  '#' ,'">Trends</a>\n    </li>\n\n    <li>Friends</li>\n\n  </ul>\n\n  <ul class="profile-thumbs group">\n    ',  user.escape('all_friends') ,'<br>\n\n    ');  user.allFriends().each( function(friend) { ; __p.push('\n        <li>\n          <a href="#posts/users/', friend.id,'" class="thumb" title="',  friend.get("first_name") + ' ' + friend.get("last_name") ,'">\n            <img src="',  friend.escape('picture_url') ,'"/>\n          </a>\n        </li>\n    ');  }) ; __p.push('\n  </ul>\n\n</section>\n\n<ul class="content-main group">\n\n    <h1>',  user.escape('first_name') ,'\'s Posts</h1>\n\n    <br><a href="" id="content-main-a">Back to Posts Feed</a><br>\n\n    ');  if ((user.allFriends().findWhere({id: LsFinalproject.currentUser.id}) && (user.id !== LsFinalproject.currentUser.id))) { ; __p.push('\n      <button id="remove-friend" name="button">Remove Friend</button>\n    ');  } else { ; __p.push('\n      <button id="add-friend" name="button">Add Friend</button>\n    ');  } ; __p.push('\n\n\n</ul>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- -->\n');}return __p.join('');};
}).call(this);