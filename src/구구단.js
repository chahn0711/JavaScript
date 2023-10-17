let i, j;
for(i = 2; i <= 9; i++) {
    document.write("<table>");
    document.write("<tr><th>" + i + "단</th></tr>");
    for (j = 1; j <= 9; j++) {
        document.write("<tr><td>" + i +"X" +j + "=" + i*j +"</th></tr>"); 
    }
    document.write("</table>");
}