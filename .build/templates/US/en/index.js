(function(){dust.register("index",body_0);var blocks={"heading":body_1,"content":body_2};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layouts/cover",ctx,null);}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("Coming very soon&hellip;");}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<p class=\"lead\">Track where serving <abbr title=\"brown\">broon</abbr> sauce at local chippies is acceptable.</p>");}return body_0;})();