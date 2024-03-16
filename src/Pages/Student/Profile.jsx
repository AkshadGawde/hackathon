import React, { useState, useEffect } from "react";
import Nav from "../../Components/Nav";
import { useTheme } from "../../Components/theme-provider";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Avatar } from "../../Components/ui/avatar";

const Profile = () => {
  
  return (
    <div>
      <Nav/>
        <div className="p-2 m-1 grid gap-4 grid-cols-1 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent>
            </CardContent>
          </Card>
        </div>
    </div>
  );
};

export default Profile;
