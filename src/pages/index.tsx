import { Box, Button, CircularProgress, Link, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    return () => {};
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/main");
    }, 1.2 * 1000);
  };

  //scss 작업 필요 하는김에 컴포넌트 분리 필요
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "calc(100vh - 6px)",
        bgcolor: "background.paper",
        color: "primary.main",
        justifyContent: "center",
        alignItems: "center",
      }}
      component="div"
    >
      <Box
        component="div"
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
        }}
      >
        <Box component="div">로고 By MinHyeock.Kim</Box>
        <Box component="div">
          <TextField label="아이디" variant="outlined" />
        </Box>
        <Box component="div">
          <TextField
            label="비밀번호"
            type="password"
            autoComplete="current-password"
          />
        </Box>
        <Box component="div">
          <LoadingButton
            sx={{ width: "100%" }}
            onClick={handleLogin}
            loading={isLoading}
            variant="contained"
          >
            <span>로그인</span>
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}
