(function() { this.JST || (this.JST = {}); this.JST["search"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<section class="results">\n\n\t<nav>\n\t\t<!-- Displaying page number ',  results.pageNum ,' out\n\t\tof ',  results.total_count ,' results -->\n\t\tSearch Results  | \n\t\t<a class="prev-page" href="javascript:void(0)">Prev</a>\n\t\t<a class="next-page" href="javascript:void(0)">Next</a>\n\t</nav>\n\n\t');  results.each(function (result) { ; __p.push('\n\t\t<article>\n\t\t\t');  if (result instanceof LsFinalproject.Models.User) { ; __p.push('\n\n\t\t\t\t', result.escape("first_name") + ' ' + result.escape("last_name") ,'\n\t\t\t\t<a href="#posts/users/',  result.escape('id'),'">Go to user\'s page →</a>\n\n\t\t\t');  }; __p.push('\n\n\t\t\t');  if (result instanceof LsFinalproject.Models.Post) { ; __p.push('\n\n\t\t\t\t', result.escape("description") ,'\n\t\t\t\t<a href="#posts/users/',  result.escape('owner_id'),'">Go to page with this post →</a>\n\n\t\t\t');  }; __p.push('\n\n\t\t\t');  if (result instanceof LsFinalproject.Models.Comment) { ; __p.push('\n\n\t\t\t\t', result.escape("content") ,'\n\t\t\t\t<a href="#posts/users/',  result.escape('post_owner_id'),'">Go to page with this comment →</a>\n\n\t\t\t');  }; __p.push('\n\n\t\t</article>\n\t');  }) ; __p.push('\n\n\n</section>\n\n\n\n\n\n\n\n\n\n<!--  -->\n');}return __p.join('');};
}).call(this);