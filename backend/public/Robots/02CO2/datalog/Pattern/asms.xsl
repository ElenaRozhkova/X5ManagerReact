<?xml version='1.0'?>
<xsl:stylesheet
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
   version="1.0">
<xsl:template match="/">
<html>
  <body>
    <xsl:for-each select="assignmentsfile">
      <table border="1" width="100%">
        <tr>
          <td width="100%" bgcolor="#99FF33"><font face="Arial" size="5"><b>Assignmentsfile </b></font><font size="5"><b>'<xsl:value-of select="@filename"/>'</b></font></td>
        </tr>
      </table>
      <table border="1" width="100%">
        <tr>
          <td width="15%" bgcolor="#99FF33"><font face="Arial">Changed</font></td>
          <td width="85%"><xsl:value-of select="@changed"/></td>
        </tr>
      </table>
      <br/>
      <xsl:for-each select="section">
        <table border="1" width="100%">
          <tr>
            <td width="100%" bgcolor="#99FF33"><font face="Arial" size="4"><b>Section </b></font><font size="4"><b>'<xsl:value-of select="@name"/>'</b></font></td>
          </tr>
        </table>
        <table border="1" width="100%">
          <tr>
            <td width="26%" bgcolor="#99FF33"><font face="Arial">Name</font></td>
            <td width="34%" bgcolor="#99FF33"><font face="Arial">PLC Variable</font></td>
            <td width="8%" bgcolor="#99FF33"><font face="Arial">Default Val</font></td>
          </tr>
          <xsl:for-each select="assign">
            <tr>
              <td><xsl:value-of select="@name"/></td>
              <td><xsl:value-of select="plc_var"/></td>
              <td><xsl:value-of select="var_default"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </xsl:for-each>
      <br/>
    </xsl:for-each>
  </body>
</html>
</xsl:template>
</xsl:stylesheet>
