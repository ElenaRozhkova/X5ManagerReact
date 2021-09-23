<?xml version='1.0'?>
<xsl:stylesheet
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
   version="1.0">
<xsl:template match="/">
<html>
  <body>
    <xsl:for-each select="valuesfile">
      <table border="1" width="100%">
        <tr>
          <td width="100%" bgcolor="#99FF33"><font face="Arial" size="5"><b>Valuesfile </b></font><font size="5"><b>'<xsl:value-of select="@filename"/>'</b></font></td>
        </tr>
      </table>
      <table border="1" width="100%">
        <tr>
          <td width="15%" bgcolor="#99FF33"><font face="Arial">Changed</font></td>
          <td width="85%"><xsl:value-of select="@changed"/></td>
        </tr>
        <tr>
          <td bgcolor="#99FF33"><font face="Arial">Created using Assignmentsfile</font></td>
          <td>'<xsl:value-of select="@asms_file"/>', Changed = <xsl:value-of select="@asms_chg"/></td>
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
            <td width="30%" bgcolor="#99FF33"><font face="Arial">Name</font></td>
            <td width="70%" bgcolor="#99FF33"><font face="Arial">Value</font></td>
          </tr>
          <xsl:for-each select="value">
            <tr>
              <td><xsl:value-of select="@name"/></td>
              <td><xsl:value-of select="val"/></td>
            </tr>
          </xsl:for-each>
        </table>
        <br/>
      </xsl:for-each>
    </xsl:for-each>
  </body>
</html>
</xsl:template>
</xsl:stylesheet>
