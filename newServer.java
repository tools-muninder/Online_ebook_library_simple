package service;
import javax.ws.rs.Path;
import java.sql.Connection;
import java.sql.DriveManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.ws.rs.POST;
import javax.ws.rs.QueryParam;

@Path("book")
public class BookResource{
    public Connection getConnection() throws Exception{
        try {
                String connectionURL = "jdbc:mysql://localhost/bookdb";
                Connection connection = null;
                Class.forName("com.mysql.jdbc.Driver").newInstance();
                connection = DriveManager.getConnection(connectionURL, "root", "");
                return connection;        
            }
        catch(SQLException e){
            throw e;   
        }
        catch(Exception e){
            throw e;
        }
    }

    @POST
    @Path("/login")
    public String login(@QueryParam("username") String username,@QueryParam("password") String password){
        String result = null;
        try {
            Connection connection = getConnection();
            PreparedStatement ps = connection.prepareStatement("SELECT * FROM users where username=? and password=?");
            ps.setString(1,username);
            ps.setString(2,password);
            ResultSet rs = ps.executeQuery();
            if(rs.next()){
                result= "Valid User";
            }else{
                result = "Invalid user"l
            }
        }
        catch (Exception e){
            //TODO Auto generated catch block
            e.printStackTrace();
        }
        return result;
    }
    @POST
    @Path("/register")
    public String registerUser(@QueryParam("username") String user,@QueryParam("password") String password,@QueryParam("address") String address){
        String result = null;
        System.out.println("username"+username+"password"+password+"   address"+address);
        
        try {
            String query = "insert into users values('"+username+"','"+password+"','"+address+"');";
            Statement stmt = connection.createStatement();
            int rs = stms.executeUpdate(query);
            if (rs>0){
                result = "User Registered Succesfully";
            }
        }
        catch (Exception e){
            //TODO auto generated catch block
            e.printStackTrace();
        }
        return result;
    }
}